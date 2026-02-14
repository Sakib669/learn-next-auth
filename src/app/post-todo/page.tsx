"use client";

import { useState } from "react";
import { User, FileText } from "lucide-react";

export default function InputAndTextarea() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 to-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* কার্ড */}
        <div className="bg-base-100 rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Input + Textarea</h2>
          
          <div className="space-y-6">
            {/* টেক্সট ইনপুট ফিল্ড */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Text Input</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  placeholder="Type something..."
                />
              </div>
            </div>

            {/* টেক্সট এরিয়া */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Text Area</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <FileText className="h-5 w-5 text-base-content/40" />
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea textarea-bordered w-full pl-10 min-h-30"
                  placeholder="Write something longer..."
                />
              </div>
            </div>

            {/* ডিসপ্লে ভ্যালু (অপশনাল) */}
            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <p className="text-sm font-medium">Text: {text || "—"}</p>
              <p className="text-sm font-medium mt-2">Description: {description || "—"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}