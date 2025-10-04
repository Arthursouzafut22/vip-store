import { colors } from "@/utils/colors";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <h1
        style={{ color: colors.fontColor, fontSize: "clamp(18px,4vw, 28px)" }}
      >
        ❌ Produto não encontrado...
      </h1>
    </div>
  );
}
