type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;
    };

export default function Profile
({ name, email, isActive, singleLine }: ProfileProps) {
    return (
      <>
        {!singleLine ? (
          <>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{isActive ? "Active" : "Not Active"}</p>
          </>
        ) : null}
        {singleLine ? (
          <>
            <p>{name} {email} {isActive}</p>
          </>
        ) : null}
      </>
    );
}