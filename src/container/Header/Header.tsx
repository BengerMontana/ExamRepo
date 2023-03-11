import ClickBtn from '../../components/ClickBtn/ClickBtn'
import { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
    const buttonLabels = [
        'Button 1',
        'Button 2',
        'Button 3',
        'Button 4',
        'Button 5',
        'Button 6',
        'Button 7',
        'Button 8',
        'Button 9',
        'Button 10',
    ]
    const buttonColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'aqua',
        'pink',
        'tomato',
        'violet',
        'grey',
        'coral',
    ]

    const [totalClicks, setTotalClicks] = useState<number>(0)

    const handleButtonClick = () => {
        setTotalClicks(totalClicks + 1)
    }
    return (
        <div className="flex">
            <ClickBtn
                buttonLabels={buttonLabels}
                buttonColors={buttonColors}
                onButtonClick={handleButtonClick}
            />
            <p className="bg-white rounded px-3 py-2">
                Total clicks: {totalClicks}
            </p>
        </div>
    )
}
export default Header
