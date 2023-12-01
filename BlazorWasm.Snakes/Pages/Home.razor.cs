using BlazorWasm.Snakes.Models;
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
}

