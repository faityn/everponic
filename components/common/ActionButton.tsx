import Image from "next/image";

const ActionButton = () => {
    return (
        <div className="">
            <Image
                src="/images/action_button.png"
                alt="basket"
                className="w-auto h-auto  "
                width="54"
                height="54"
                unoptimized={true}
                priority={true}
            />
        </div>
    );
};

export default ActionButton;
