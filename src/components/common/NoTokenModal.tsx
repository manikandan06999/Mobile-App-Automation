interface Props {
  onClose: () => void;
  onBuy: () => void;
}

const NoTokenModal = ({ onClose, onBuy }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-8 text-center transition-colors">

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Not Enough Tokens
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You don’t have enough tokens to create an app.
          Please purchase a token to continue.
        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
          >
            Cancel
          </button>

          <button
            onClick={onBuy}
            className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
          >
            Buy 1 Token (₹1000)
          </button>

        </div>

      </div>
    </div>
  );
};

export default NoTokenModal;
