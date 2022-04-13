/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Texto que irá dentro del label
    */
    label: string;
    /**
     * Tamaño del label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * El texto es todo mayusculas?
     */
    allCaps: boolean;
    /**
     * Color del label
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Color del texto
     */
    fontColor: string;
    /**
     * Color del fond
     */
    backgroundColor: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
