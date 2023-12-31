﻿using BlazorWasm.Snakes.Models;
using BlazorWasm.Snakes.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
namespace BlazorWasm.Snakes.Pages;
public partial class Home
{
    private List<SnakeModel>? _snakes = new List<SnakeModel>();
    private EnumSnakeDetail _enumSnakeDetail = EnumSnakeDetail.Disable;
    private SnakeModel? _snakeModel;
    int count = 0;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await LoadJavaScript();
            _snakes = _snakeService.GetSnakes();
            StateHasChanged();
        }
    }

    private async Task OnClick(SnakeModel item)
    {
        _enumSnakeDetail = EnumSnakeDetail.Enable;
        _snakeModel = item;
        _snakeModel.Detail = item.Detail.Contains("\n") ?
            item.Detail.Replace("\n","<br>") : item.Detail;
        Console.WriteLine(_snakeModel.Detail);
        await LoadJavaScript();
        StateHasChanged();
    }

    private async Task Back()
    {
        _enumSnakeDetail = EnumSnakeDetail.Disable;
        _snakeModel = null;
        _snakes = _snakeService.GetSnakes();
        StateHasChanged();
        await LoadJavaScript();
    }

    private async Task LoadJavaScript()
    {
        await Task.Delay(500);
        await JsRuntime.InvokeVoidAsync("loadJs", "theme/js/scripts.js");
    }

    private string ImagePath(int id)
    {
        return $"snakes/{id}.jpg";
    }

    private static string Map(string input)
    {
        switch (input.ToLower())
        {
            case "yes":
                return "ရှိ";
            case "no":
                return "မရှိ";
            default:
                return "Invalid input";
        }
    }
}

