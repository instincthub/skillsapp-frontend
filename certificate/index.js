const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const ticketId = document.getElementById("ticketid").value;
const issuedDate = document.getElementById("date").value;
// const Dara = document.write("<html><body><h2>HTML</h2></body></html>");
// const Dara = document.getElementById("certificate_Course").value;
const course = document.getElementById("certificate_Course").value;
const { PDFDocument, rgb, degrees } = PDFLib;

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

// let D = new Date();
// const Dara = document.getElementById("date").value;

submitBtn.addEventListener("click", () => {
  const val = capitalize(userName.value);
  // const Date = capitalize(Date.value);

  //check if the text is empty or not
  if (val.trim() !== "" && userName.checkValidity()) {
    // console.log(val);
    generatePDF(val);
  } else {
    userName.reportValidity();
  }
});

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("./plain.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./dancing-script.ttf").then((res) =>
    res.arrayBuffer()
  );
  const ticketF = await fetch("./regular.ttf").then((res) => res.arrayBuffer());

  // Embed our custom font in the document
  const SanChezFont = await pdfDoc.embedFont(fontBytes);
  const ticketFont = await pdfDoc.embedFont(ticketF);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // let collected = "Hello There";

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: 280,
    y: 270,
    size: 30,
    font: SanChezFont,
    color: rgb(0.0, 0.0, 0.0),
  });

  // Draw the course thats Completed
  firstPage.drawText(ticketId, {
    x: 60,
    y: 480,
    size: 15,
    font: ticketFont,
    color: rgb(0.0, 0.0, 0.0),
  });

  // Draw the course thats Completed
  firstPage.drawText(issuedDate, {
    x: 670,
    y: 480,
    size: 15,
    font: ticketFont,
    color: rgb(0.0, 0.0, 0.0),
  });

  // Draw the course thats Completed
  firstPage.drawText(course, {
    x: 260,
    y: 150,
    size: 15,
    font: ticketFont,
    color: rgb(0.0, 0.0, 0.0),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  var file = new File([pdfBytes], "Certificate of Completion.pdf", {
    type: "application/pdf;charset=utf-8",
  });
  saveAs(file);
};

// init();
