import React from 'react';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

export default function Main() {
  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  return (
    <div className="relative flex min-h-[calc(100vh-160px)] w-[100vw] h-screen flex-col items-center gap-6 overflow-x-hidden bg-lightIvory p-4 justify-center text-lightText">
      <div className="mt-2 text-[20px] font-bold">{`음성인식 결과`}</div>
      <div>{`🙋🏻‍♀️ : ${text}`}</div>
      <div className="flex flex-col justify-center w-full items-center gap-4">
        {hasRecognitionSupport ? (
          <>
            <div>
              <button
                className="bg-midIvory focus:outline-none text-lightText px-4 py-2 text-[20px] w-[60vw] font-semibold"
                onClick={startListening}
              >
                START
              </button>
            </div>
            <div>
              <button
                className="bg-midIvory focus:outline-none text-lightText px-4 py-2 text-[20px] w-[60vw] font-semibolde"
                onClick={stopListening}
              >
                STOP
              </button>
            </div>
            {isListening ? (
              <div>...듣는중입니다. 마이크에 대고 얘기해주세요🎤</div>
            ) : null}
          </>
        ) : (
          <>
            <h1>음성인식이 지원되지 않는 브라우저입니다.</h1>
          </>
        )}
      </div>
    </div>
  );
}
