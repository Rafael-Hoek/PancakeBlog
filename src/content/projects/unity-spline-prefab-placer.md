---
title: Spline Prefab Placer
abstract: A Unity editor tool that places prefabs along a spline you draw in the scene, instead of placing each one by hand.
date: 2022-06-01
tags: unity, csharp, editor-tool
---
A Unity editor tool I built during my internship at LuGus Studios. When the same object has to be placed 100 times along a path, such as fences, lamp posts or trees along a road, you draw the path once and the tool does the placing.

## Features

- Edit a spline with draggable nodes and control points. Nodes can be free or mirrored for smooth curves.
- Choose how many prefabs to place, or the distance between them.
- Three placement modes: a pattern such as `ABBAC`, weighted random, or the order of a list.
- Apply scale, rotation and random offsets to each prefab.
- Project the spline onto the ground and align prefabs to the ground normal.
- Resampling settings control how precisely prefabs follow the curve (±0.0001 m by default).

## Technology

- Unity
- C# (custom inspector and scene-view editor scripts)

## Getting started

Import `PrefabPlacementSpline.unitypackage` through *Assets → Import Package → Custom Package…*. Then add the **Prefab Placement Spline** component to an empty GameObject, add your prefabs, and click *Place prefabs on spline*. The repository readme has a step-by-step quick guide.

## Links

- [Source on GitHub](https://github.com/Rafael-Hoek/Unity-PrefabPlacementSpline)
