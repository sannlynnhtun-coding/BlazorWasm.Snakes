#!/usr/bin/env bash
set -euo pipefail

dotnet_dir="${TMPDIR:-/tmp}/dotnet"
install_script="${TMPDIR:-/tmp}/dotnet-install.sh"
if [[ ! -x "${dotnet_dir}/dotnet" ]]; then
  curl --fail --silent --show-error --location https://dot.net/v1/dotnet-install.sh --output "${install_script}"
  bash "${install_script}" --channel 10.0 --install-dir "${dotnet_dir}" --no-path
fi

export DOTNET_CLI_TELEMETRY_OPTOUT=1
export DOTNET_NOLOGO=1
"${dotnet_dir}/dotnet" publish BlazorWasm.Snakes/BlazorWasm.Snakes.csproj --configuration Release --output artifacts/vercel -p:WasmBuildNative=false
