export default function RainbowText({ children }) {
  return (
    <h1 className="rainbow-text">
      {children}
      <style jsx>{`
        .rainbow-text {
          font-size: 48px;
          font-weight: bold;
          background: linear-gradient(
            90deg,
            red,
            orange,
            yellow,
            green,
            blue,
            indigo,
            violet
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }
      `}</style>
    </h1>
  );
}
