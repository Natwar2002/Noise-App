import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { IoShieldCheckmark } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { LucideLoader, TriangleAlert } from 'lucide-react';

export default function SignupCard({ signupForm, setSignupForm, validationErrors, handleSignup, isPending, error, isSuccess }) {  
  return (
    <Card shadow='lg' className='bg-white dark:bg-neutral-900 px-10 py-6'>
      <CardHeader className='fex flex-col items-start'>
        <h2 className='text-2xl font-semibold'>Sign Up</h2>
        <p className='text-xs text-slate-400'>We would love to be in touch with you!</p>
        {validationErrors && (
          <div className="error-messages text-sm">
            {Object.values(validationErrors).map((error, index) => (
              error && <div key={index}>
                <TriangleAlert className='size-5' />
                <p className="text-red-700">{error}</p> 
              </div>
            ))}
          </div>
        )}
        {error && (
          <div className='bg-red-600 px-4 py-2 rounded-md flex items-center gap-x-2 text-sm text-destructive my-3'>
            <TriangleAlert className='size-5' />
            <p>{error?.message}</p>
          </div>
        )}
        {isSuccess && (
          <div className='bg-green-200 px-4 py-2 rounded-md flex items-center gap-x-2 text-green-600 text-sm my-3'>
            <IoShieldCheckmark className='size-10' />
            <p>Successfully signed up, You will be redirected to the login page shortly</p>
            <LucideLoader className='animate-spin ml-1 size-10' />
          </div>
        )}
      </CardHeader>
      <CardBody>
        <form className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <Input
              size='sm'
              isRequired 
              className="max-w-full"
              label="First Name"
              disabled={isPending}
              onChange={(e) => setSignupForm({ ...signupForm, firstName: e.target.value })}
            />
            <Input
              size='sm'
              className="max-w-full"
              isRequired
              label="Last Name"
              disabled={isPending}
              onChange={(e) => setSignupForm({ ...signupForm, lastName: e.target.value })}
            />
          </div>
          <Input 
            className="max-w-full"
            label="Email"
            isRequired
            size='sm'
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Username"
            isRequired
            size='sm'
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Password"
            isRequired
            size='sm'
            type="password"
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Confirm Password"
            isRequired
            size='sm'
            type="password"
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
          />
          <Button
            onPress={handleSignup}
            isLoading={isPending}
            color='primary'
            variant='flat'
            disabled={isPending}
          >
            { isPending ? 'Signing Up...' : 'Sign Up' }
          </Button>
        </form>
      </CardBody>
      <CardFooter className='text-sm'>
        <p>Already have an account? &nbsp;
          <Link className='text-blue-500' to='/signin'>login</Link>
        </p>
      </CardFooter>
    </Card>
  );
}