import { cn } from "../../lib/cn";
import { handleAnchorClick } from "../../lib/smoothScroll";

const PaperPlane = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    />
  </svg>
);

export function SendButton({
  children,
  href,
  onClick,
  type,
  className,
  ...rest
}) {
  const content = (
    <>
      <span className="send-btn__wrapper" aria-hidden="true">
        <span className="send-btn__icon">
          <PaperPlane />
        </span>
      </span>
      <span className="send-btn__text">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith("#")) handleAnchorClick(e);
          onClick?.(e);
        }}
        className={cn("send-btn", className)}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={cn("send-btn", className)}
      {...rest}
    >
      {content}
    </button>
  );
}
