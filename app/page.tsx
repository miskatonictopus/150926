export default function Page() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#9333ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "100%",
            backgroundColor: "#ef4444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "55px", textAlign: "center", lineHeight: "1em", fontWeight: 900 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut massa erat. Duis
            convallis varius velit, a tempor mi rhoncus ut. Aenean vel viverra risus.
          </p>
        </div>
      </div>
      <section style={{ height: "50vh", minHeight: "450px", width: "100vw", backgroundColor: "#0a0a0a" }} />
      <section style={{ height: "50vh", minHeight: "450px", width: "100vw", backgroundColor: "#525252" }} />
    </>
  )
}
