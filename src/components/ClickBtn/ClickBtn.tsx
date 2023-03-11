import { useState } from 'react'

interface ButtonClickerProps {
    buttonLabels: string[]
    buttonColors: string[]
    onButtonClick: () => void
}
const ButtonClicker = ({
    buttonLabels,
    buttonColors,
    onButtonClick,
}: ButtonClickerProps) => {
    const [buttonClicks, setButtonClicks] = useState<number[]>(
        new Array(buttonLabels.length).fill(0)
    )
    const handleButtonClick = (index: number) => {
        const newButtonClicks = [...buttonClicks]
        newButtonClicks[index]++
        setButtonClicks(newButtonClicks)
        onButtonClick()
    }
    return (
        <div>
            <div className="">
                {buttonLabels.map((label, index) => (
                    <button
                        className="px-3 py-2 rounded mr-5 text-xl"
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        style={{ backgroundColor: buttonColors[index] }}
                    >
                        {label} ({buttonClicks[index]})
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ButtonClicker
