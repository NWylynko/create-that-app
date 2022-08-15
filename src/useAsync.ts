import { useState } from "react";

export const useAsync = <T>(fn: () => Promise<T>) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);
  
  const execute = async () => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    try {
      const data = await fn();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { execute, loading, error, data }
}