import IeltsContent from "./ielts-content";

export default async function IeltsPage({
  searchParams,
}: {
  searchParams: Promise<{ article?: string | string[] }>;
}) {
  return <IeltsContent searchParams={searchParams} />;
}
