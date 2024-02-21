export function useFormat() {
  function handlePhoneFormat(phone) {
    let telefoneFormatado = phone.replace(/\D/g, "").slice(0, 11);

    if (telefoneFormatado.length === 11) {
      telefoneFormatado = telefoneFormatado.replace(
        /(\d{2})(\d{1})(\d{4})(\d{4})/,
        "($1) $2 $3-$4"
      );
    }

    if (telefoneFormatado.length === 10) {
      telefoneFormatado = telefoneFormatado.replace(
        /(\d{2})(\d{4})(\d{4})/,
        "($1) $2-$3"
      );
    }
    return telefoneFormatado;
  }

  function handleCpfCnpjFormat(document) {
    let formattedDocument = document.replace(/\D/g, "");
    if (formattedDocument.length === 11) {
      formattedDocument = formattedDocument.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    }

    if (formattedDocument.length === 14) {
      formattedDocument = formattedDocument.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }

    return formattedDocument;
  }

  return { handlePhoneFormat, handleCpfCnpjFormat };
}
