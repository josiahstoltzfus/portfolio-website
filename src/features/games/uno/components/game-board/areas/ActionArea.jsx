import "./ActionArea.css";
import {buildActionMessage} from "../../../utils/utils.js";

export default function ActionArea({lastAction, players}) {
    const actionMessage = buildActionMessage(lastAction, players);

    return (
        <div
            className="action-area"
            role="status"
            aria-atomic="true"
        >
            {actionMessage?.message && (
                <div className="action-area-message">
                    <span
                        aria-hidden="true"
                        className={`action-color ${actionMessage.color?.toLowerCase() ?? "neutral"}`}
                    />

                    <div className="action-area-text">
                        <p className="action-area-primary">
                            {actionMessage.message}
                        </p>

                        {actionMessage.detail && (
                            <p className="action-area-detail">
                                {actionMessage.detail}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}