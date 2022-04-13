import './myLabel.css'

interface MyLabelProps {
    /**
    * Texto que irá dentro del label
    */
    label: string
    /**
     * Tamaño del label
     */
    size: "normal" | "h1" | "h2" | "h3"
    /**
     * El texto es todo mayusculas?
     */
    allCaps: boolean
    /**
     * Color del label
     */
    color: "primary" | "secondary" | "tertiary"
    /**
     * Color del texto
     */
    fontColor: string
    /**
     * Color del fond
     */
    backgroundColor: string

}

export const MyLabel = ({

    label = "No label",

    size = "normal",

    color = "primary",

    allCaps,

    fontColor,

    backgroundColor = "transparent",

}: MyLabelProps) => {
    return (
        <span
            className={`${size} text-${color} label`}
            style={{ color: fontColor, backgroundColor }}
        >
            {
                allCaps ? label.toUpperCase() : label
            }
        </span>
    )
}
