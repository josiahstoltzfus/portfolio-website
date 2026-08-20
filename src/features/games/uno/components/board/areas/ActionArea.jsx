import "./ActionArea.css";
import { buildActionMessage } from "../../../utils/utils.js";

export default function ActionArea({ lastAction }) {
    const actionMessage = buildActionMessage(lastAction);

    return (
        <div
            className="action-area"
            role="status"
            aria-atomic="true"
        >
            {actionMessage?.message && (
                <div className="action-area-message">
                    {actionMessage.message}

                    {actionMessage.color && (
                        <span
                            className={`action-color ${actionMessage.color.toLowerCase()}`}
                        >
                            {" "}
                            {actionMessage.color}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}