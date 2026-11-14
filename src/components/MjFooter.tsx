interface MjFooterProps {
  message: string;
  miniText: string;
}

export default function MjFooter({ message, miniText }: MjFooterProps) {
  return (
    <footer className="relative flex h-[25vh] w-full flex-col items-center justify-center">
      <h1 className="z-[2] flex h-4/5 w-full flex-col items-center justify-center border-t-(length:--border-thick) border-primary-800 bg-[linear-gradient(to_top,var(--color-neutral-900)_0%,transparent_30%_70%,var(--color-neutral-900)_100%)] text-xl font-bold">
        {message}
      </h1>
      <p className="flex h-1/5 w-full items-center justify-center text-xs text-neutral-500">{miniText}</p>
    </footer>
  );
}
