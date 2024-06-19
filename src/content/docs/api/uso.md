---
title: Uso de la API
description: Documentación para la API de FileBeam
---

FileBeam cuenta con una API simple de usar que te permite hacer uso de este mismo y subir archivos de forma sencilla. Esta página se encargará de explicar cómo hacer uso de la API de FileBeam.

## Introducción

* **URL Base:** `https://filebeam.xyz/api/` (importante añadir la ultima diagonal al final de /api/)
* **Método:** `POST`

## Uso Basico

La API requiere de un argumento `file`, con la ruta al archivo deseado.

Puedes subir un archivo a FileBeam a través de la API usando *curl* de la siguiente manera:

```bash
$ curl -X POST -F "file=@/ruta/al/archivo.png" https://filebeam.xyz/api/
https://filebeam.xyz/file/LvmcHH.png
```

## Argumentos Adicionales

### `time` (aún no disponible)

El argumento **time** indicará por cuánto tiempo el archivo estará disponible; puedes usarlo para subidas temporales. El valor debe ser alguno de los siguientes: `1, 2, 6, 12, 24, 48, 72`. La unidad de tiempo es por horas.

## Restricciones

Las mismas restricciones que aplican al servicio principal también aplican a la API. Fuera de ello, la API no cuenta con restricciones mayores ni requiere autenticación. Por lo tanto, *confiamos* en que esta será usada de forma correcta. FileBeam se reserva el derecho de prohibir el acceso a esta misma sin previo aviso. Para más información, consulta los <a href="/disclaimer/tos" target="_blank">Términos y Condiciones</a>.
