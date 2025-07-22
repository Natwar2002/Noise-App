import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Link } from "react-router-dom";
import { IoShieldCheckmark } from 'react-icons/io5';

export default function LoginCard({ validationErrors, error, handleLogin, isPending, setLoginForm, loginForm, isSuccess }) {
  return (
    <Card shadow='lg' className='bg-white dark:bg-neutral-900 px-10 py-6'>
      <CardHeader className='fex flex-col items-start'>
        <h2 className='text-2xl font-semibold'>Log in</h2>
        <p className='text-xs text-slate-400'>Welcome back!</p>
        {validationErrors && (
          <div className="error-messages text-sm">
            {Object.values(validationErrors).map((error, index) => (
              error && <p key={index} className="text-red-700">{error}</p> 
            ))}
          </div>
        )}
        { error && <p className="error">{error}</p> }
        { isSuccess && (
          <div className='bg-green-200 px-4 py-2 rounded-md flex items-center gap-x-2 text-green-600 text-sm my-3'>
            <IoShieldCheckmark className='size-10' />
            <p>Successfully logged in, You will be redirected to the chats page shortly</p>
            {/* <LucideLoader className='animate-spin ml-2' /> */}
          </div>
        )}
      </CardHeader>
      <CardBody>
        <form className='flex flex-col gap-4'>
          <Input 
            className="max-w-full"
            isRequired
            size="sm"
            label="Username"
            disabled={isPending}
            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Password"
            isRequired
            size="sm"
            type="password"
            disabled={isPending}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
          />
          <Button
            onPress={handleLogin}
            isLoading={isPending}
            color='primary'
            variant='flat'
            disabled={isPending}
          >
            { isPending ? 'Loggin In...' : 'Log In' }
          </Button>
        </form>
      </CardBody>
      <CardFooter className='text-sm'>
        <p>Donot have an account? &nbsp;
          <Link className='text-blue-500' to={'/signup'}>signup</Link>
        </p>
      </CardFooter>
    </Card>
  );
}