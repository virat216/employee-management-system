import { Dialog } from "@headlessui/react";

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    confirmButtonClassName?: string;
    isLoading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDialog = ({
    isOpen,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    confirmButtonClassName = "bg-red-600 hover:bg-red-700",
    isLoading = false,
    onConfirm,
    onCancel,
}: ConfirmDialogProps) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                if (!isLoading) {
                    onCancel();
                }
            }}
            className="relative z-50"
        >
            <div
                className="fixed inset-0 bg-black/30"
                aria-hidden="true"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                    <Dialog.Title className="text-lg font-semibold text-gray-900">
                        {title}
                    </Dialog.Title>

                    <Dialog.Description className="mt-2 text-sm text-gray-600">
                        {message}
                    </Dialog.Description>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onCancel}
                            disabled={isLoading}
                            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {cancelText}
                        </button>

                        <button
                            type="button"
                            onClick={onConfirm}
                            disabled={isLoading}
                            className={`rounded-md px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 ${confirmButtonClassName}`}
                        >
                            {isLoading ? "Please wait..." : confirmText}
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default ConfirmDialog;