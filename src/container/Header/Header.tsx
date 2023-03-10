type Props = {}
const Header = (props: Props) => {
    return (
        <div>
            <div className="grid grid-cols-10 gap-2 mb-5">
                <button className="bg-yellow-300 px-5 py-2 rounded text-blue-600">
                    1
                </button>
                <button className="bg-blue-300 px-5 py-2 rounded text-blue-600">
                    2
                </button>
                <button className="bg-red-300 px-5 py-2 rounded text-blue-600">
                    3
                </button>
                <button className="bg-orange-300 px-5 py-2 rounded text-blue-600">
                    4
                </button>
                <button className="bg-green-300 px-5 py-2 rounded text-blue-600">
                    5
                </button>
                <button className="bg-violet-300 px-5 py-2 rounded text-blue-600">
                    6
                </button>
                <button className="bg-pink-300 px-5 py-2 rounded text-blue-600">
                    7
                </button>
                <button className="bg-white px-5 py-2 rounded text-blue-600">
                    8
                </button>
                <button className="bg-black px-5 py-2 rounded text-blue-600">
                    9
                </button>
                <button className="bg-rose-300 px-5 py-2 rounded text-blue-600">
                    10
                </button>
            </div>
            <div className="bg-teal-500 rounded px-2 py-2 w-20">Clicked: 5</div>
        </div>
    )
}
export default Header
