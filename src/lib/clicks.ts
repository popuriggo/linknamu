import { getDb } from "@/lib/mongodb";

type LinkClickDocument = {
  _id: string;
  count: number;
  updatedAt: Date;
};

/** 링크 하나의 클릭 수를 1 증가시킵니다. 문서가 없으면 새로 만듭니다. */
export async function incrementLinkClick(linkId: string): Promise<void> {
  const db = await getDb();
  await db
    .collection<LinkClickDocument>("link_clicks")
    .updateOne(
      { _id: linkId },
      { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true },
    );
}
