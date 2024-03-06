import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {
    type ButtonHTMLAttributes,
    type ReactNode,
    forwardRef,
    type ForwardedRef,
} from 'react';

export type ButtonVariant = 'outline' | 'filled';
export type ButtonColor = 'normal' | 'light-gray' | 'gray';
export type ButtonRadius = 'noneRadius' | 'smRadius' | 'mRadius';
export type ButtonPadding = 'smGap' | 'mGap';

export type ButtonSize = 's' | 'm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    children?: ReactNode;
    size?: ButtonSize;
    radius?: ButtonRadius;
    disabled?: boolean;
    fullWidth?: boolean;
    gap?: ButtonPadding;
}

const Button = forwardRef(
    (
        props: ButtonProps,
        ref: ForwardedRef<HTMLButtonElement>,
    ): React.ReactElement => {
        const {
            className = '',
            children,
            variant = 'outline',
            color = 'normal',
            radius = 'noneRadius',
            size = 'm',
            disabled = false,
            fullWidth = false,
            gap = 'smGap',
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
        };

        return (
            <button
                type="button"
                disabled={disabled}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[color],
                    cls[size],
                    cls[radius],
                    cls[gap],
                ])}
                ref={ref}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export { Button };
