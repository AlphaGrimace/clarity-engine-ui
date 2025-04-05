
import { useState } from "react";

export default function ClarityEngineUI() {
  const [rawInput, setRawInput] = useState("");
  const [output, setOutput] = useState([]);
  const [coreAtom, setCoreAtom] = useState("");
  const [structure, setStructure] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleIntake = () => {
    setOutput([`Raw input received: ${rawInput}`]);
  };

  const handleCompress = () => {
    const atom = rawInput.split(".")[0];
    setCoreAtom(atom);
    setOutput((prev) => [...prev, `Core atom extracted: ${atom}`]);
  };

  const handleForm = () => {
    const struct = `[STRUCTURE] -> ${coreAtom}`;
    setStructure(struct);
    setOutput((prev) => [...prev, `Structure formed: ${struct}`]);
  };

  const handleRelease = () => {
    setOutput((prev) => [...prev, `Transmitting: ${structure}`]);
  };

  const handleFeedback = () => {
    setOutput((prev) => [...prev, `Feedback read: ${feedback}`]);
  };

  const handleRecalibrate = () => {
    const recalibrated = feedback.toLowerCase().includes("confused")
      ? structure + " (rephrased)"
      : structure;
    setStructure(recalibrated);
    setOutput((prev) => [...prev, `Structure recalibrated: ${recalibrated}`]);
  };

  const handleLock = () => {
    setOutput((prev) => [...prev, `Locked insight: ${structure}`]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <input
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter raw input..."
        value={rawInput}
        onChange={(e) => setRawInput(e.target.value)}
      />
      <div className="flex gap-2 flex-wrap">
        <button className="btn" onClick={handleIntake}>Intake</button>
        <button className="btn" onClick={handleCompress}>Compress</button>
        <button className="btn" onClick={handleForm}>Form</button>
        <button className="btn" onClick={handleRelease}>Release</button>
        <input
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button className="btn" onClick={handleFeedback}>Read Feedback</button>
        <button className="btn" onClick={handleRecalibrate}>Recalibrate</button>
        <button className="btn" onClick={handleLock}>Lock</button>
      </div>
      <div className="bg-white p-4 border rounded shadow space-y-2">
        {output.map((line, idx) => (
          <div key={idx} className="text-sm font-mono">{line}</div>
        ))}
      </div>
    </div>
  );
}
