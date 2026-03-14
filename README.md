# 🎵 Music Play! Suite  — Ecosistema Neuroeducativo Musical PWA

[![GitHub Pages](https://img.shields.io/badge/Producci%C3%B3n-ACTIVA-brightgreen?logo=github)](https://raultpiano-web.github.io/music-play-suite/)
[![PWA](https://img.shields.io/badge/PWA-Instalable-blueviolet?logo=googlechrome)](https://raultpiano-web.github.io/music-play-suite/)
[![HTTPS](https://img.shields.io/badge/HTTPS-Obligatorio-blue?logo=letsencrypt)](https://raultpiano-web.github.io/music-play-suite/)
[![Licencia](https://img.shields.io/badge/Licencia-50%2F50%20Proprietary-orange)](https://github.com/raultpiano-web/music-play-suite)
[![Versión](https://img.shields.io/badge/Versi%C3%B3n--informational)](https://github.com/raultpiano-web/music-play-suite/releases)

---

## 🚀 Acceso Directo a Producción

> **🔗 URL única de acceso seguro:**
> ## [https://raultpiano-web.github.io/music-play-suite/](https://raultpiano-web.github.io/music-play-suite/)

| Recurso | URL |
|---------|-----|
| 🚀 App Producción (HTTPS) | https://raultpiano-web.github.io/music-play-suite/ |
| 💻 Repositorio GitHub | https://github.com/raultpiano-web/music-play-suite |
| 📋 Proyecto / Tablero | https://github.com/users/raultpiano-web/projects/1 |
| ⚙️ Service Worker | https://raultpiano-web.github.io/music-play-suite/sw.js |
| 📱 Manifest PWA | https://raultpiano-web.github.io/music-play-suite/manifest.json |
| 🐛 Issue #1 (despliegue) | https://github.com/raultpiano-web/music-play-suite/issues/1 |

---

## 📘 Descripción

**Music Play! Suite** es una Progressive Web App (PWA) completa diseñada para el aprendizaje musical neuroeducativo offline. La versión ** Award Edition** incluye:

- 🧠 **Motor IA Edge** de detección de tono por autocorrelación (BUG-02 corregido)
- 🎰 **G1 Bingo de Solfeo** con autocorrección vocal IA
- ✨ **G2 Afinador de Estrellas** con secuencias melódicas
- 🎯 **G3 Cuatro Esquinas** con práctica intercalada de timbres
- 🚦 **G4 Semáforo SEL** (regulación emocional somatic)
- 🎼 **G5 Síntesis Creativa** con escala pentatónica
- 🧠 **G6 Analíticas Predictivas** con Spaced Repetition System (SRS)
- 📋 **G7 Rúbrica LOMLOE** con exportación PDF/JSON
- 📴 **Funcionamiento 100% offline** tras primera visita

---

## ✅ Pipeline CI/CD — Estado de Despliegue

```bash
# PASO 1: Archivos PWA base — VERIFICADO
index.html      ✔   Award Edition (commit 5466dbb)
manifest.json   ✔  standalone, es-ES, iconos 192/512
sw.js           ✔  music-play-v15-cache, rutas relativas
README.md       ✔  Descripción completa + enlaces producción

# PASO 2: Historial Git — VERIFICADO
git init                                          ✔
git add .                                         ✔
git commit -m "Lanzamiento  PWA y README"    ✔
git branch -M main                                ✔

# PASO 3: Conexión y Push — VERIFICADO
git remote add origin https://github.com/raultpiano-web/music-play-suite.git  ✔
git push -u origin main                           ✔

# PASO 4: HTTPS Pages — VERIFICADO
Settings > Pages > Deploy from branch: main       ✔
HTTPS enforced (GitHub Pages TLS)                 ✔
URL: https://raultpiano-web.github.io/music-play-suite/  ✔

# PASO 5: Gestión de Proyectos — VERIFICADO
Proyecto: ¡Reproduce música! Suite           ✔
Issue #1: Cerrado — Estado: Hecho                 ✔
Etiquetas: produccion +                      ✔
Hito:  — Producción HTTPS + PWA             ✔
```

---

## 🛡️ Verificaciones de Seguridad PWA

| Criterio | Estado | Detalle |
|----------|--------|---------|
| HTTPS | ✅ PASS | GitHub Pages TLS obligatorio |
| manifest.json | ✅ PASS | `standalone`, `es-ES`, iconos SVG+PNG |
| Service Worker | ✅ PASS | Cache `music-play-v15-cache`, offline |
| Instalable | ✅ PASS | Chrome/Edge: instalar desde barra |
| lang="es" | ✅ PASS | `<html lang="es">` |
| meta theme-color | ✅ PASS | `#0f172a` |
| BUG-09 Sol | ✅ FIX | `--c-sol: #0C9648` |
| BUG-03 SW rutas | ✅ FIX | `./sw.js`, `./manifest.json`, `v15_eval` |

---

## 🎓 Cómo Acceder al Ecosistema

1. Abre **https://raultpiano-web.github.io/music-play-suite/**
2. Elige rol: **Docente** 👩‍🏫 o **Alumno** 🎓
3. Escribe tu nombre o identificador
4. Pulsa **“Acceder al Ecosistema”**
5. *(Opcional)* En Chrome/Edge: instala como PWA desde el icono de la barra de direcciones

---

## 📁 Estructura del Repositorio

```
music-play-suite/
├── index.html       # App completa (SPA, 810 líneas, )
├── manifest.json    # PWA Manifest (standalone, es-ES)
├── sw.js            # Service Worker (cache offline)
└── README.md        # Este archivo
```

---

## 📜 Changelog 

## 🔄 Changelog v15.1

| BUG | Descripción | Estado |
|-----|-------------|--------|
| BUG-10 | CACHE_NAME corregido a 'music-play-v15-cache' | ✅ Corregido |
| BUG-11 | Service Worker: rutas relativas verificadas | ✅ Corregido |

**➡️ Cambios principales v15.0 → v15.1:**
- 🛠️ Corrección crítica del CACHE_NAME en sw.js (de 'music-play-pwa-v15.1' a 'music-play-v15-cache')
- ✅ Verificación completa de rutas relativas en Service Worker
- 📌 Actualización de título de aplicación a v15.1
- 📦 PWA instalable verificada y funcional

| BUG | Descripción | Estado |
|-----|-------------|--------|
| BUG-01 | Matriz de notas completa (7 notas) | ✅ Corregido |
| BUG-02 | autoCorrelate: buf[SIZE-i] correcto | ✅ Corregido |
| BUG-03 | SW rutas relativas + cache v15_eval | ✅ Corregido |
| BUG-09 | Color Sol --c-sol: #0C9648 | ✅ Corregido |

---

## ©️ Licencia

**© 50/50 Raúl Teresa Hdez & Gemini** — Todos los derechos reservados.

Proyecto educativo desarrollado para el Ecosistema Neuroeducativo Musical Offline con IA Vocal y Repetición Espaciada (SRS). Marco pedagógico LOMLOE.

---

*Última actualización: 14/03/2026 — Commit activo: `5466dbb`*
