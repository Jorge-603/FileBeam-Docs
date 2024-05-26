---
title: Alojamiento de archivos
description: Explicación sobre cómo funciona el alojamiento de archivos en FileBeam
---

El alojamiento de archivos es la funcionalidad principal sobre la que FileBeam está construido. Consiste simplemente en subir tu archivo y obtener un enlace directo a este. Sin embargo, para resolver dudas, algunas de estas son explicadas en esta página.

## ¿Por cuánto tiempo son alojados los archivos?

Por defecto, los archivos son alojados por tiempo indefinido (de forma permanente). Adicionalmente, la API provee un uso adicional para alojar archivos de forma temporal. *(Referirse al argumento [`time`](/api/uso/#time) en el uso de la API)*

## ¿Mis archivos son modificados o comprimidos al subirlos?

No, FileBeam no modificará ni alterará de ninguna forma tus archivos ni su contenido al subirlos. El servidor alojará una copia idéntica al archivo original.

:::danger
Al subir archivos multimedia como imágenes o videos, asegúrate de limpiar cualquier información identificable adjunta a ellos si planeas compartirlos. Por ejemplo, la ubicación, ya que los archivos capturados desde tu dispositivo móvil u otros suelen contener estos metadatos. Es importante tener en cuenta que **FileBeam no elimina estos metadatos y conserva el archivo en su forma original.**
:::

## ¿Qué tipo de archivos puedo subir?

Puedes subir cualquier tipo de archivo siempre y cuando se mantenga de acuerdo a los lineamientos y no se encuentre en la lista negra de extensiones. Puedes encontrar las especificaciones para la lista negra y los lineamientos abajo.

### Lista negra <span class="text-[.7em] opacity-50">(Sujeta a cambios)</span>
* **.js**: Archivos JavaScript
* **.jar**: Archivos Java
* **.scr**: Salvapantallas de Windows
* **.cpl**: Archivos de Panel de Control
* **.jsp**: Archivos JavaServer Pages
* **.doc, .docx**: Documentos de Microsoft Word

### Lineamientos
Se permite el almacenamiento de archivos (incluido contenido explícito) que no infrinjan ninguna ley o regulación vigente, que no sean perjudiciales, amenazantes, difamatorios, ofensivos, violentos o que inciten al odio. Cualquier contenido ilegal será eliminado y se tomarán las medidas correspondientes.

El no apegarse a los lineamientos puede resultar en la terminación o prohibición del servicio. Para más información, consulta los <a href="/disclaimer/tos" target="_blank">Términos y Condiciones</a>.

## ¿Quiénes pueden acceder a mis archivos?

A diferencia de un servicio de almacenamiento en la nube tradicional (Google Drive, MEGA, etc.), FileBeam es simplemente un servicio para alojar archivos y compartirlos a través de enlaces directos, siendo esta la funcionalidad principal de FileBeam. Por ende, tus archivos pueden ser accesibles por cualquier persona con un enlace a este, así que evita usar FileBeam para alojar archivos privados, confidenciales, o con información sensible. Con propósitos de moderación, tus archivos también pueden ser vistos por los administradores del servicio. Puedes leer más en la <a href="/disclaimer/privacy" target="_blank">Política de privacidad</a>.