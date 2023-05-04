export function addKalendaLib(kalendaLibUrl: string) {
    const script = document.createElement('script');
    script.src = kalendaLibUrl;
    script.async = true;
    document.body.appendChild(script);
  }