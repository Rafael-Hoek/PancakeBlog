---
title: Unity Asset Importer & Prefab Creator
abstract: A Unity editor tool that imports meshes and textures into the right folders and automatically builds materials and prefabs from them.
date: 2022-06-02
tags: unity, csharp, editor-tool
---
A Unity editor tool I built during my internship at LuGus Studios to take the repetitive work out of importing art assets. Instead of moving files into folders and wiring up materials by hand, you point it at a folder and it does the rest.

## Features

- Detects asset types by naming convention: `.fbx` meshes, `_Collision` meshes, and albedo, `_M` (metallic), `_N` (normal), `_AO` (ambient occlusion) and `_Mask` textures.
- Groups textures that share a name into one material.
- Assembles the mesh, material and colliders into a prefab, attaching the material automatically when only one is found.
- Sorts assets into folders by prefab type and labels everything it imports.
- Optional overwrite of existing files and automatic deletion of the collision mesh after use.
- New prefab types take two lines in `PrefabType.cs`: an enum entry and a folder mapping.

## Technology

- Unity
- C# (editor window and asset-import scripts)

## Getting started

Import `AssetImporter-PrefabCreator.unitypackage` as any other Unity package. Then open *Project → Asset Tools → Add New Prefab*, select a folder, choose a prefab type and click *Create prefab*. The repository readme has a quick guide and a full user guide.

## Links

- [Source on GitHub](https://github.com/Rafael-Hoek/Unity-AssetImporter-PrefabCreator)
