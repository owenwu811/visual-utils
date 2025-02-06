import FileUploader from "../components/ui/FileUploader";

export default function Home() {
  return (
    <div>
      <h1>Hello all</h1>
      <FileUploader /> {/* need to call FileUploader here */}
    </div>
  );
}

