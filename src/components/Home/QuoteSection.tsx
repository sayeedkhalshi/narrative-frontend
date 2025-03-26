export default function QuoteSection() {
    return (
        <section className="flex items-center justify-center">
            <div className="max-w-2xl p-6 text-center rounded-lg">
                <h4 className="text-xl font-light text-gray-800 mb-4 italic">
                    “I believe the web should be built following the perspective
                    of how the human brain learns - by letting a user follow a
                    personal narrative, not by random content that leads to
                    random learning that doesn't fit the narrative and creates
                    confused souls trying to connect dots that are way to far
                    from each other.”
                </h4>
                {/* <p className="text-md text-gray-600 font-semibold mt-4">
                    - <span className="text-blue-600">Abu Sayeed</span>
                </p> */}
                {/* <div className="mt-6">
                    <button className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300 shadow-lg">
                        Learn
                    </button>
                </div> */}
            </div>
        </section>
    );
}
