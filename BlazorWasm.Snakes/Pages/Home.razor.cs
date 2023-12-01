using Microsoft.JSInterop;
namespace BlazorWasm.Snakes.Pages;
public partial class Home
{
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await Task.Delay(500);
            await JsRuntime.InvokeVoidAsync("loadJs", "theme/js/scripts.js");
            StateHasChanged();
        }
    }
}

