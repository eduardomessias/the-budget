export default function FormCreateGoal ({ onSubmitHandler }) {
    return (
        <form onSubmit={onSubmitHandler}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Set a new goal</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Type the label to identify the new goal and keep the track of it during the budgeting period.</p>
            <div className="relative mb-4">
                <label htmlFor="label" className="leading-7 text-sm text-gray-600">Label</label>
                <input type="text" id="label" name="label" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
                <label htmlFor="deadline" className="leading-7 text-sm text-gray-600">Deadline</label>
                <input type="date" id="deadline" name="deadline" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
                <label htmlFor="weight" className="leading-7 text-sm text-gray-600">Weight</label>
                <select id="weight" name="weight" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
                    <option value='WHATEVER'>Whatever</option>
                    <option value='IF POSSIBLE'>If possible</option>
                    <option value='HOPE SO'>Hope so</option>
                    <option value='LOOKING FORWARD'>Looking forward</option>
                    <option value='EXTREMELY IMPORTANT'>Extremely important</option>
                </select>
            </div>
            <button type="submit" value="Submit" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3">This goal will be added to your budget.</p>
        </form>
    )
}