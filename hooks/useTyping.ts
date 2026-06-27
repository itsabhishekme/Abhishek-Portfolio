"use client";

import { useEffect, useRef, useState } from "react";

interface UseTypingOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

interface UseTypingReturn {
  text: string;
  isTyping: boolean;
  currentWord: number;
}

export default function useTyping({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: UseTypingOptions): UseTypingReturn {
  const [text, setText] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!words.length) return;

    const word = words[currentWord];

    const type = () => {
      if (!isDeleting) {
        if (text.length < word.length) {
          setText(word.substring(0, text.length + 1));
          timeoutRef.current = setTimeout(type, typingSpeed);
        } else {
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(true);
          }, delayBetweenWords);
        }
      } else {
        if (text.length > 0) {
          setText(word.substring(0, text.length - 1));
          timeoutRef.current = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);

          if (currentWord < words.length - 1) {
            setCurrentWord((prev) => prev + 1);
          } else if (loop) {
            setCurrentWord(0);
          }
        }
      }
    };

    timeoutRef.current = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    text,
    currentWord,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    loop,
  ]);

  return {
    text,
    isTyping,
    currentWord,
  };
}