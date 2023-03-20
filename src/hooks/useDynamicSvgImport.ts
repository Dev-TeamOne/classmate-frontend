import { useEffect, useRef, useState, ReactElement } from 'react';

interface useDynamicSvgImportProps {
  name: string;
}

function useDynamicSvgImport({ name }: useDynamicSvgImportProps): {
  SvgIcon?: any;
  error: boolean;
  loading: boolean;
} {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`../assets/icons/${name}.svg`)).ReactComponent;
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    importIcon();
  }, [name]);
  return { error, loading, SvgIcon: ImportedIconRef.current };
}

export default useDynamicSvgImport;
