import { useEffect } from "react";
import Image from "../image";

const FeedContentPost = () => {
    const autoResize = (el) => {
        if (el) {
            // Reset height to 'auto' to calculate the new height based on content
            el.style.height = "auto";
            // Set height to match the scrollHeight (content height)
            el.style.height = el.scrollHeight + "px";
        }
    };

    // Example usage of autoResize function
    useEffect(() => {
        const textarea = document.getElementById("comment-post");
        if (textarea) {
            textarea.addEventListener("input", () => autoResize(textarea));
        }
        return () => {
            if (textarea) {
                textarea.removeEventListener("input", () =>
                    autoResize(textarea)
                );
            }
        };
    }, []);

    return (
        <>
            <div className="w-full flex flex-col gap-10 items-center">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[90%] lg:w-[75%] h-min flex flex-col"
                    >
                        {/* <!-- PROFILE PICTURE, USERNAME --> */}
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex flex-row justify-between gap-3 w-min">
                                    <div className="w-10 h-10 bg-black rounded-full">
                                        <Image src="./img/profile/1.jpg" className="w-full h-full rounded-full object-cover"/>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <h3 className="text-sm text-white font-semibold">
                                            bagus.jpeg
                                        </h3>
                                        {/* <h3 className="text-sm text-white font-semibold"><?= $p['username'] ?></h3> */}
                                        <div className="h-1 w-1 rounded-full bg-gray-300 mt-[3px]"></div>
                                        <h3 className="text-sm text-slate-400" id="timeAgo" time="<?= $p['created_at'] ?>">
                                            5d
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-1 hover:cursor-pointer">
                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- MAIN CONTENT --> */}
                        <div className="w-full h-[500px] my-4 rounded-md bg-gray-500">
                            <Image src="./img/post/735-Mazda.jpeg" alt="feed content" className="h-full w-full object-cover rounded-md"/>
                        </div>
                        {/* <!-- LIKE, COMMENT, DIRECT MESSAGES --> */}
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row justify-between gap-4 w-min">
                                <button className="w-6 h-6">
                                    <Image src="./svg/like-post.svg" alt="like button"
                                    />
                                </button>
                                <button className="w-6 h-6">
                                    <Image src="./svg/comment-post.svg" alt="message button"
                                    />
                                </button>
                                <button className="w-6 h-6">
                                    <Image src="./svg/send-post.svg" alt="send button"
                                    />
                                </button>
                            </div>
                            <button className="w-6 h-6">
                                <Image src="./svg/saved-post.svg" alt="saved button"
                                />
                            </button>
                        </div>
                        {/* <!-- CAPTION POST --> */}
                        <div className="flex flex-col justify-between">
                            {/* <!-- NAME ACCOUNT & FEED CAPTIONS --> */}
                            <div className="flex flex-col gap-0 h-min mt-2">
                                {/* <h2 className="text-white text-sm font-semibold"><?= $p['username'] ?> <span className="font-normal"><?= $p['caption'] ?> </span></h2> */}
                                <div className="flex flex-row">
                                    <h2 className="text-white text-sm font-semibold">
                                        bagus.jpeg &nbsp;
                                    </h2>
                                    <span className="text-white text-sm font-normal">
                                        Hello All People
                                    </span>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <p className="text-gray-600 text-sm mt-1">
                                        View all 3 comments
                                    </p>
                                    {/* <?php endif ?> */}
                                </div>
                                {/* <!-- COMMENT --> */}
                                <form action="../controllers/addComment.php?post=1" method="post" encType="multipart/form-data" className="flex flex-row-reverse gap-3 mt-0" id="form_comment" >
                                    <button type="submit">
                                        <Image src="./svg/send_message.svg" alt="send button" className="w-6 h-6 mt-2 hover:cursor-pointer hover:text-white" id="send_button" />
                                    </button>
                                    <textarea name="comment-post" id="comment-post" rows="1" className="w-full border-0 border-b border-b-slate-700 outline-none placeholder:pl-0 placeholder-shown:pl-0 bg-transparent text-sm text-white resize-none overflow-hidden pb-4" placeholder="Add a comment..." onInput={autoResize(this)}
                                        // onInput="autoResize(this)"
                                    ></textarea>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FeedContentPost;
