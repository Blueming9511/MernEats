import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export default function () {
 return (
    <Button disabled>
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Loading
    </Button>
  )
}
