import classNames from 'classnames';
import styles from "./tagsPrato.module.scss"
import { Prato } from 'types/Prato';

export const TagsPrato = ({ category, size, price, serving }: Prato) => {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
            })}>{category.label}</div>
            <div className={styles.tags__porcao}>{size}g</div>
            <div className={styles.tags__qtdpessoas}>{serving} pessoas{serving === 1 ? '' : 's'}</div>
            <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
        </div>
    );
}