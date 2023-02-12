import Header from "./header";

const Settings = () => (
  <div>
    <Header
      title="settings"
      rightIcon="fas fa-chevrons-left"
      rightIconLink="App.tsx"
    />

    <div className="row">
      <div className="dropdown">
        <label htmlFor="fontSizeDropdown">Font size:</label>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="fontSizeDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select a font size...
        </button>
        <ul className="dropdown-menu" aria-labelledby="fontSizeDropdown">
          <li>
            <a className="dropdown-item" href="settings.tsx">
              small
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="settings.tsx">
              medium
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="settings.tsx">
              large
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="settings.tsx">
              extra-large
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
export default Settings;
