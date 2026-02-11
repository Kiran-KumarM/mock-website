import { useState, useEffect } from 'react';
import './Timer.css';

function Timer({ duration, onTimeUp }) {
    const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds
    const [isWarning, setIsWarning] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        // Warning when 5 minutes or less remaining
        if (timeLeft <= 300 && !isWarning) {
            setIsWarning(true);
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp, isWarning]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getProgressPercentage = () => {
        return (timeLeft / (duration * 60)) * 100;
    };

    return (
        <div className={`timer-container ${isWarning ? 'warning' : ''}`}>
            <div className="timer-icon">⏱️</div>
            <div className="timer-content">
                <div className="timer-label">Time Remaining</div>
                <div className="timer-display">{formatTime(timeLeft)}</div>
                <div className="timer-progress-bar">
                    <div
                        className="timer-progress-fill"
                        style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
