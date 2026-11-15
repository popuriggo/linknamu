import { MongoClient, type Db } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

/**
 * MongoDB 연결을 한 번만 만들어 재사용합니다 (개발 서버 핫 리로드 대응).
 * 연결 실패 시 캐시를 비워 다음 요청에서 다시 시도합니다.
 */
export function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error("MONGODB_URI is not set"));
  }

  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri)
      .connect()
      .catch((error: unknown) => {
        globalForMongo.mongoClientPromise = undefined;
        throw error;
      });
  }

  return globalForMongo.mongoClientPromise.then((client) => client.db());
}
