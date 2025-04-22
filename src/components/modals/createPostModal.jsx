import { useEffect } from "react";

const CreatePostModal = ({ isOpen, onClose}) => {
    useEffect(() => {
        const textarea = document.getElementById('description');
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === "Enter") {
                event.preventDefault();
                document.getElementById("btn_submitAddContent").click();
            }
        };

        if (textarea) {
            textarea.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            if (textarea) {
                textarea.removeEventListener("keydown", handleKeyDown);
            }
        };
    }, []);

    if (!isOpen) return null;

    return (
        <>
            <div
                id="create-post-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`${
                    isOpen ? "flex" : "hidden"
                  } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-full h-full bg-black/80`}
            >
                <div className="relative p-4 w-full max-w-lg max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative rounded-lg shadow-sm bg-gray-800 ">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                            <h3 className="text-lg font-semibold text-white">
                                Create Content
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer
                                "
                                onClick={onClose}
                            >
                                <svg
                                    className="w-3 h-3"
                                    // aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form
                            className="p-4 md:p-5"
                            id="form_addContent"
                            action="../controllers/addContent.php"
                            method="post"
                            encType="multipart/form-data"
                        >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        htmlFor="file_input"
                                    >
                                        Upload file
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        name="content-image"
                                        accept=".jpg, .jpeg, .png"
                                        required
                                    />
                                    <p
                                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                        id="file_input_help"
                                    >
                                        JPG, JPEG, PNG (no multiply item)
                                    </p>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Content Caption
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="4"
                                        className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name="content-caption"
                                        placeholder="Write caption here..."
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-end md:justify-start">
                                <button
                                    type="submit"
                                    id="btn_submitAddContent"
                                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePostModal;
