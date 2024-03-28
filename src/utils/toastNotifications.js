import toast from "react-hot-toast";

export const showToastWithCopy = (otp) => {
  toast(
    (t) => (
      <span>
        {otp}
        <button
          onClick={() => {
            navigator.clipboard.writeText(otp);
            toast.dismiss(t.id);
          }}
          className="border-2 border-gray-300 rounded-md ml-2 px-2"
        >
          Copy
        </button>
      </span>
    ),
    {
      duration: 5000,
    }
  );
};
