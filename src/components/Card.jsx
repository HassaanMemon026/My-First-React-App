export default function Card({card}) {
    return (

        <div className="max-w-lg w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-3xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">
                {card.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
                {card.body}
            </p>
            <div className="mt-6 flex justify-between items-center">
                <span className="text-gray-400 text-sm">User ID: {card.userId}</span>
                <span className="text-gray-400 text-sm">Post ID: {card.id}</span>
            </div>
        </div>

    );
}
