import { useState, useRef } from "react";

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-slate-700 border-dashed">
            <button
                className="w-full py-5 flex justify-between items-center focus:outline-none pr-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className={`text-xl font-semibold ${
                        isOpen ? "text-primary " : ""
                    }`}
                >
                    {title}
                </span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            <div
                ref={contentRef}
                style={
                    isOpen && contentRef.current
                        ? { height: `${contentRef.current.scrollHeight}px` }
                        : { height: "0px" }
                }
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
            >
                <div
                    className={`pt-2 pr-4 pb-8 opacity-0 transform transition-opacity duration-500 ease-in-out delay-300 ${
                        isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                    }`}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
