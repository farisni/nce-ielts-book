import { parseNce4L48 } from "./parse-md";
import { Nce4L48ClientPage } from "./client-page";

const { content, rootData } = parseNce4L48();

export default function Nce4L48Page() {
  return <Nce4L48ClientPage content={content} rootData={rootData} />;
}
